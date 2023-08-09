import { useEffect } from "react"

const useLog = log => {
  useEffect(() => console.log(log), [])
}

export default useLog
