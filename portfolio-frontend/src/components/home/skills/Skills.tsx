import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FrontendSkills from "./FrontendSkills"

export default function Skills() {
    return (
        <Tabs defaultValue="frontend" className="max-w-7xl flex flex-col items-center justify-center mx-auto my-10">
            <TabsList>
                <TabsTrigger value="frontend">Frontend Skills</TabsTrigger>
                <TabsTrigger value="backend">Backend Skills</TabsTrigger>
            </TabsList>
            <TabsContent value="frontend">
                <FrontendSkills />
            </TabsContent>
            <TabsContent value="backend">
                <FrontendSkills />
            </TabsContent>
        </Tabs>
    )
}
