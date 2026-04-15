import Link from "next/link"
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbPage,
} from "@/components/ui/BreadCrumb"
type Item = {
    label: string
    path: string
}
export function AppBreadcrumb({ items }: { items: Item[] }) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {items.map((item, i) => {
                    const isLast = i === items.length - 1
                    return (
                        <div key={i} className="flex items-center">
                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage >{item.label}</BreadcrumbPage>
                                ) : (

                                    <BreadcrumbLink href={item.path} className="text-blue-400">
                                        {item.label}
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                            {!isLast && <BreadcrumbSeparator />}
                        </div>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb >
    )
}