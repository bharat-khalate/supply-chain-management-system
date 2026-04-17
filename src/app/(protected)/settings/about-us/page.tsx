import SettingShell from "@/components/common/settings-layout/SettingsShell"// Adjust path as needed

export default function ManageAboutUs() {
  return (
    <SettingShell title="Manage About Us">
      <div className="flex flex-col w-full bg-white rounded-md shadow-sm border border-gray-200 p-6">
        <div className="border-b border-gray-200 mb-6">
          <button className="border-b-2 border-blue-500 pb-2 px-4 text-sm font-medium text-blue-600">
            Details
          </button>
        </div>
        <div className="space-y-8">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              About Us for Distributor<span className="text-red-500">*</span>
            </label>
            <div className="border border-blue-300 rounded-md min-h-[200px] bg-white">
              <div className="flex items-center gap-4 px-3 py-2 border-b border-gray-200 bg-gray-50 text-gray-500 text-lg">
                <span>B</span> <span>I</span> <span>U</span> <span>S</span> <span>{"<>"}</span>
              </div>
              <textarea
                className="w-full p-4 text-sm text-gray-600 outline-none"
                rows={6}
                defaultValue="Type here...."
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-8">
          <button className="px-6 py-2 border border-gray-300 text-gray-600 rounded-md hover:bg-gray-50 transition">
            Reset
          </button>
          <button className="px-6 py-2 bg-[#4A5E8A] text-white rounded-md hover:bg-opacity-90 transition">
            Save
          </button>
        </div>
      </div>
    </SettingShell>
  );
}