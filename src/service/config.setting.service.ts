import { ISetting } from "@/types/settings"
import { configSetting } from "@/utils/data"
const configSettingService = {
    getAll: async (): Promise<ISetting> => {
        return new Promise((resolve) => setTimeout(() => resolve(configSetting), 300))
    },
    updateAll: async (data: ISetting): Promise<ISetting> => {
        return new Promise((resolve) => setTimeout(() => resolve(data), 300));
    }
}
export default configSettingService;
export type TSettingService = typeof configSettingService;