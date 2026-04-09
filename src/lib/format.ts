import humanizeDuration from "humanize-duration";

export function formatDuration(seconds: number) {
  // humanize-duration 라이브러리로 시간 형식 변환
  const duration = humanizeDuration(seconds * 1000, {
    largest: 1,
    round: true,
    units: ["h", "m", "s"],
    language: "ko",
    fallbacks: ["en"],
  });

  // 한국어 표현에 맞게 '전' 접미사 추가
  return `${duration} 전`;
}
