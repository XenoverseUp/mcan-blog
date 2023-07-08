const getAccessToken = async () => {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
    json: true,
  })

  const data = await response.json()
  console.log(data)

  return data
}

/**
 * @typedef {Object} Track
 * @property {string} title
 * @property {string} artist
 * @property {string} url
 * @property {string} coverImage
 * @property {string} albumName
 * @property {number} year
 */

/**
 *
 * @returns {Promise<Track>}
 */
export const getTrack = async () => {
  const { access_token } = await getAccessToken()
  const res = await (
    await fetch("https://api.spotify.com/v1/tracks/6Dm2KfuPBa3eXOgHaT88r4", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
  ).json()

  const track = {
    title: res.name,
    artist: res.artists.map(_artist => _artist.name).join(", "),
    url: res.external_urls.spotify,
    coverImage: res.album.images[1],
    year: new Date(res.album.release_date).getFullYear(),
    albumName: res.album.name,
  }

  return track
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

  const track = {
    title: items[0].name,
    artist: items[0].artists.map(_artist => _artist.name).join(", "),
    url: items[0].external_urls.spotify,
    coverImage: items[0].album.images[1],
    year: new Date(items[0].album.release_date).getFullYear(),
    albumName: items[0].album.name,
  }

  return track
}
