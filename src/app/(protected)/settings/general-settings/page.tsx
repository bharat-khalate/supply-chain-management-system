"use client";

import GeneralInfoSettingForm from "@/components/common/settings-layout/forms/GenralInfoSettingForm";
import SocialMediaLinkForm from "@/components/common/settings-layout/forms/SocialMediaLinkForm";
import SettingShell from "@/components/common/settings-layout/SettingsShell";
import { Tabs } from "@heroui/react";
import { useState } from "react";
type TNavigationOptions = "general" | "app-version" | "social-media-links" | "app-link";
export default function AboutUsSettingPage() {
  const [activeTab, setActiveTab] = useState<TNavigationOptions>("general");
  let content;
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
      )
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
      )
    },
    { key: "app-link", label: "App Link" },
    { key: "app-version", label: "App Version" },
  ]

  switch (activeTab) {
    case "app-version":
      content = (
        <div className="space-y-4 max-w-2xl">
          {/* Android Version */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Android Versions<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="1.0.0"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* iOS Version */}
          <div>
            <label className="block text-sm font-medium mb-1">
              IOS Versions<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="1.0.0"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <p className="text-sm text-red-500">
            Note: Please do not change this value until confirmed by developers.
          </p>

          <div className="flex gap-3 pt-2">
            <button className="bg-gray-700 text-white px-4 py-2 rounded-md text-sm">
              Submit
            </button>
            <button className="border px-4 py-2 rounded-md text-sm">
              Reset
            </button>
          </div>
        </div>
      );
      break;
    case "general":
      content = (<div className="space-y-4 max-w-2xl">
        <div>
          <label className="block text-sm font-medium mb-1">
            System Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            defaultValue="admin@admin.com"
            className="w-full border rounded-md px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Phone Number<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            defaultValue="9177885566"
            className="w-full border rounded-md px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Website Video URL<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            defaultValue="https://example.com/video-url"
            className="w-full border rounded-md px-3 py-2 text-sm"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button className="bg-gray-700 text-white px-4 py-2 rounded-md text-sm">
            Submit
          </button>
          <button className="border px-4 py-2 rounded-md text-sm">
            Reset
          </button>
        </div>
      </div>);
      break;
    case "social-media-links":
      content = (<div className="space-y-4 max-w-2xl">
        <div>
          <label className="block text-sm font-medium mb-1">
            X (Twitter) Profile URL
          </label>
          <input
            type="text"
            placeholder="https://twitter.com/your-profile"
            className="w-full border rounded-md px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Facebook Profile URL
          </label>
          <input
            type="text"
            placeholder="https://facebook.com/your-profile"
            className="w-full border rounded-md px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Instagram Profile URL
          </label>
          <input
            type="text"
            placeholder="https://instagram.com/your-profile"
            className="w-full border rounded-md px-3 py-2 text-sm"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button className="bg-gray-700 text-white px-4 py-2 rounded-md text-sm">
            Submit
          </button>
          <button className="border px-4 py-2 rounded-md text-sm">
            Reset
          </button>
        </div>
      </div>);
      break;
    case "app-link":
      content = (<div className="space-y-4 max-w-2xl">
        <div>
          <label className="block text-sm font-medium mb-1">
            Android App Link<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            defaultValue="https://play.google.com/store/apps/details?id=com.app"
            className="w-full border rounded-md px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            iOS App Link<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            defaultValue="https://apps.apple.com/app/id123456789"
            className="w-full border rounded-md px-3 py-2 text-sm"
          />
        </div>

        <p className="text-sm text-red-500">
          Note: Please do not change this value until confirmed by developers.
        </p>

        <div className="flex gap-3 pt-2">
          <button className="bg-gray-700 text-white px-4 py-2 rounded-md text-sm">
            Submit
          </button>
          <button className="border px-4 py-2 rounded-md text-sm">
            Reset
          </button>
        </div>
      </div>);
      break;
    default:
      content = (
        <div className="text-sm text-gray-500">
          {activeTab} content goes here...
        </div>
      );
  }
  return (

    <SettingShell title="Manage Settings">

      {/* <div className="w-64">
        <ul className="space-y-2">
          {sideBarOptions.map((item) => (
            <li key={item.key}>
              <button
                onClick={() => setActiveTab(item.key as TNavigationOptions)}
                className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium ${activeTab === item.key
                  ? "bg-blue-900 text-white"
                  : "text-blue-600 hover:bg-gray-100"
                  }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div> */}

      {/* Content */}
      {/* <div className="flex-1">
        {content}

      </div> */}
      <Tabs orientation="vertical" className="w-full">
        <Tabs.ListContainer    >
          <Tabs.List className="bg-inherit text-inherit gap-3" >
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
          return render != undefined ?
            render(key)
            : (
              <Tabs.Panel key={key} id={key} >
                <div className="text-sm text-gray-500">
                  content goes here...
                </div>
              </Tabs.Panel>
            )
        })}
      </Tabs>

    </SettingShell >

  );
}