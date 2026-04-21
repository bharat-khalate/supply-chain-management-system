import { IPageSetting } from "@/types/settings";
import { pageSetting } from "@/utils/data";

const pageSettingService = {
    fetchAll: async (): Promise<IPageSetting> => {
        return new Promise((resolve) => setTimeout(() => resolve(pageSetting), 300));
    },
    updateAll: async (data: IPageSetting): Promise<IPageSetting> => {
        return new Promise((resolve, reject) => setTimeout(() => resolve(data), 300));
    }
}

export default pageSettingService;
export type TPageSettingService = typeof pageSettingService;