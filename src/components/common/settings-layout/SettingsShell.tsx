import Card from "../AppCard";

interface SettingShellProps {
    title: string;
    children: React.ReactNode
}

export default function SettingShell({ title, children }: SettingShellProps): React.ReactElement {
    return (

        <Card className="p-6 bg-gray-100 min-h-screen">
            <div className="bg-white rounded-md shadow-sm p-6 min-w-0">
                <Card.Header className="border-b border-gray-500 mb-6 py-2">
                    <h2 className="text-lg font-semibold ">{title}</h2>
                </Card.Header>
                <Card.Content>
                        {children}
                </Card.Content>
            </div>
        </Card>
    )
}