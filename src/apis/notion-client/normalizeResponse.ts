import { ExtendedRecordMap } from "notion-types"

/**
 * Notion API 응답의 이중 nesting을 정규화합니다.
 *
 * Notion이 응답 구조를 변경하여:
 *   기존: recordMap.block[id] = { value: Block, role }
 *   현재: recordMap.block[id] = { spaceId, value: { value: Block, role } }
 *
 * 이 함수는 새로운 구조를 기존 구조로 변환합니다.
 */
function normalizeRecordMap(recordMap: any): ExtendedRecordMap {
  const maps = [
    "block",
    "collection",
    "collection_view",
    "notion_user",
    "signed_urls",
  ] as const

  for (const key of maps) {
    const map = recordMap[key]
    if (!map) continue

    for (const id of Object.keys(map)) {
      const entry = map[id]
      if (entry?.value?.value !== undefined && entry?.value?.role !== undefined) {
        map[id] = entry.value
      }
    }
  }

  return recordMap as ExtendedRecordMap
}

export { normalizeRecordMap }
