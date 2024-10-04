import type { Shuoshuo, Block } from "./interfaces.ts";
import { fetchShuoshuos } from "./notionAPI.mjs";

export const shuoshuos = await fetchShuoshuos() as Shuoshuo[];

/**
 * 根据 id 获取特定的 Shuoshuo
 * @param id - 要查找的 Shuoshuo 的 id
 * @returns {Shuoshuo | undefined} - 返回匹配的 Shuoshuo 或 undefined
 */
export function getShuoshuoById(id: string): Shuoshuo | undefined {
    return shuoshuos.find(shuoshuo => shuoshuo.id === id);
}