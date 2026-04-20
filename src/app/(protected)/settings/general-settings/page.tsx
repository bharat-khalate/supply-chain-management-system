"use client";
import GeneralInfoSettingForm from "./_forms/GenralInfoSetting";
import SocialMediaLinkForm from "./_forms/SocialMediaLink";
import SettingShell from "@/components/common/settings-layout/SettingsShell";
import { Tabs } from "@heroui/react";
import AppVersion from "./_forms/AppVersion";
import AppLink from "./_forms/AppLink";
import { fetchConfigSetting, selectConfigSettingLoader } from "@/redux/slice";
import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { useSelector } from "react-redux";
import AppSpinner from "@/components/common/Spinner";
export default function AboutUsSettingPage() {
  const dispatch = useAppDispatch();
  const loading = useSelector(selectConfigSettingLoader);
  useEffect(() => {
    dispatch(fetchConfigSetting());
  }, [])
  const sideBarOptions = [
    {
      key: "general",
      label: "General Info",
      render: (key: string) => (
        <Tabs.Panel key={key} id={key}>
          <div className="text-sm text-gray-500">
            <GeneralInfoSettingForm />
          </div>
        </Tabs.Panel>
      ),
    },
    {
      key: "social-media-links",
      label: "Social Media Links",
      render: (key: string) => (
        <Tabs.Panel key={key} id={key}>
          <div className="text-sm text-gray-500">
            <SocialMediaLinkForm />
          </div>
        </Tabs.Panel>
      ),
    },
    {
      key: "app-link",
      label: "App Link",
      render: (key: string) => (
        <Tabs.Panel key={key} id={key}>
          <div className="text-sm text-gray-500">
            <AppLink />
          </div>
        </Tabs.Panel>
      ),
    },
    {
      key: "app-version",
      label: "App Version",
      render: (key: string) => (
        <Tabs.Panel key={key} id={key}>
          <div className="text-sm text-gray-500">
            <AppVersion />
          </div>
        </Tabs.Panel>
      ),
    },
  ];
  return (
    <SettingShell title="Manage Settings">
      {loading ? <AppSpinner /> : (
        <Tabs orientation="vertical" className="w-full">
          <Tabs.ListContainer>
            <Tabs.List className="bg-inherit text-inherit gap-3">
              {sideBarOptions.map(({ key, label }) => (
                <Tabs.Tab
                  key={key}
                  id={key}
                  className={`min-w-48 p-5 rounded-sm transition-colors text-blue-600 hover:bg-gray-100 aria-selected:text-white`}
                >
                  <p className="w-full text-left flex flex-row  m-2 ">{label}</p>
                  <Tabs.Indicator className=" rounded-sm bg-blue-900 " />
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs.ListContainer>
          {sideBarOptions.map(({ key, render }) => {
            return render != undefined ? (
              render(key)
            ) : (
              <Tabs.Panel key={key} id={key}>
                <div className="text-sm text-gray-500">content goes here...</div>
              </Tabs.Panel>
            );
          })}
        </Tabs>
      )}

    </SettingShell>
  );
}
