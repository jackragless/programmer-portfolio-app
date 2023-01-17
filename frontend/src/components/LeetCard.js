import {
  CircularProgress,
  Progress,
  Box,
  Stack,
  HStack,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import getLeetStats from "../services/LeetStats.service"

const LeetCard = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    getLeetStats().then((r) => {
      setData(r)
    }, [])
  })

  if (data) {
    console.log(data)
    return (
      // <></>
      <HStack>
        <CircularProgress value={data.totalSolved} max={data.totalQuestions} />
        <Stack>
          <Progress value={data.easySolved} max={data.totalEasy} />
          <Progress value={data.mediumSolved} max={data.totalMedium} />
          <Progress value={data.hardSolved} max={data.totalHard} />
        </Stack>
      </HStack>
    )
  }
}

export default LeetCard
