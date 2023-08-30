/**
 * @typedef {{
 *  title: string,
 *  artist: string,
 *  url: string
 *  albumName: string
 *  year: number,
 *  coverImage: string,
 *  coverImagePlaceholder: string,
 *  preview: string
 * }} Track
 */

const getAccessToken = async () => {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
    cache: "no-cache",
    json: true,
  })

  return await response.json()
}

/**
 *
 * @param {Object} trackData
 * @returns {Track}
 */
const createTrack = trackData => ({
  title: trackData.name,
  artist: trackData.artists.map(_artist => _artist.name).join(", "),
  url: trackData.external_urls.spotify,
  albumName: trackData.album.name,
  year: new Date(trackData.album.release_date).getFullYear(),
  coverImage: trackData.album.images[1].url,
  coverImagePlaceholder: trackData.album.images.at(-1).url,
  preview: trackData.preview_url,
})

/**
 *
 * @returns {Promise<Track>}
 */
export const getTrack = async id => {
  const { access_token } = await getAccessToken()
  const res = await (
    await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
  ).json()

  return createTrack(res)
}

/**
 *
 * @returns {Promise<Track>}
 */
export const getTopTrack = async () => {
  const { access_token } = await getAccessToken()
  const { items } = await (
    await fetch("https://api.spotify.com/v1/me/top/tracks", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
  ).json()

  return createTrack(items[0])
}

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken()
  const { items } = await (
    await fetch("https://api.spotify.com/v1/me/top/tracks", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
  ).json()

  return items.map(item => createTrack(item))
}

/**
 *
 * @returns {Track}
 */
export const getMockTrack = () => ({
  title: "Will o the Wisp",
  artist: "Opeth",
  url: "https://open.spotify.com/track/4kkPuJXecGNqHsaiCvdfmn",
  albumName: "Sorceress",
  year: 2016,
  coverImage:
    "https://i.scdn.co/image/ab67616d00001e02349084c1acdb0f86628ae460",
  coverImagePlaceholder:
    "https://i.scdn.co/image/ab67616d00004851349084c1acdb0f86628ae460",
  preview:
    "https://p.scdn.co/mp3-preview/c4e83558c000e295340d695dcd0a2c18bdf591f2?cid=d968703e73ba45f6b19dbf0226a5e9e5",
})
