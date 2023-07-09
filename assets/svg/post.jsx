const Post = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
    {...{ className }}
    viewBox="0 0 16 17"
  >
    <g clipPath="url(#clip0_5_276)">
      <path d="M4.75 3.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h6.5a.75.75 0 00.75-.75v-8.5a.75.75 0 00-.75-.75h-6.5zm6.25 9H5v-8h6v8z"></path>
      <path d="M3.5 1.5a1 1 0 001-1h1a1 1 0 002 0h1a1 1 0 002 0h1a1 1 0 002 0H15v1a1 1 0 100 2v1a1 1 0 100 2v1a1 1 0 100 2v1a1 1 0 000 2v1a1 1 0 000 2v1h-1.5a1 1 0 00-2 0h-1a1 1 0 00-2 0h-1a1 1 0 10-2 0h-1a1 1 0 10-2 0H1v-1a1 1 0 000-2v-1a1 1 0 000-2v-1a1 1 0 000-2v-1a1 1 0 000-2v-1a1 1 0 000-2v-1h1.5a1 1 0 001 1zm-.5 2v10a1 1 0 001 1h8a1 1 0 001-1v-10a1 1 0 00-1-1H4a1 1 0 00-1 1z"></path>
    </g>
    <defs>
      <clipPath id="clip0_5_276">
        <path d="M0 0H16V16H0z" transform="translate(0 .5)"></path>
      </clipPath>
    </defs>
  </svg>
)

export default Post
