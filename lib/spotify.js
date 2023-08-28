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
 * @typedef {Object} Track
 * @property {string} title
 * @property {string} artist
 * @property {string} url
 * @property {string} albumName
 * @property {number} year
 * @property {string} coverImage
 * @property {string} coverImagePlaceholder
 * @property {string} preview
 */

/**
 *
 * @param {Object} trackData
 * @returns {Track}
 */
const createTrack = trackData => ({
  title: trackData.name,
  artist: trackData.artists.map(_artist => _artist.name).join(", "),
  url: trackData.external_urls.spotify,
  coverImage: trackData.album.images[1].url,
  coverImagePlaceholder: trackData.album.images.at(-1).url,
  year: new Date(trackData.album.release_date).getFullYear(),
  albumName: trackData.album.name,
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
