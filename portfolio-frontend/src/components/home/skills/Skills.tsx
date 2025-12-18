import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FrontendSkills from "./FrontendSkills"
import BackendSkills from "./BackendSkills"
import SectionTitle from "@/components/shared/SectionTitle"
import Tools from "./Tools"

export default function Skills() {
    return (
        <>
            <div className="flex items-center justify-center gap-3 my-12">
                <span className="h-[4px] mt-2 w-10 sm:w-16 md:w-42 bg-primary"></span>
                <SectionTitle title1="Technical" />
                <span className="text-4xl md:text-5xl font-extrabold text-primary">Skills</span>
                <span className="h-[4px] mt-2 w-10 sm:w-16 md:w-42 bg-primary"></span>
            </div>

            <Tabs defaultValue="frontend" className="max-w-7xl px-4 flex flex-col items-center justify-center mx-auto my-10">
                <TabsList className="py-5">
                    <TabsTrigger className="px-5 py-4 cursor-pointer" value="frontend">Frontend</TabsTrigger>
                    <TabsTrigger className="px-5 py-4 cursor-pointer" value="backend">Backend</TabsTrigger>
                    <TabsTrigger className="px-5 py-4 cursor-pointer" value="tools">Tools</TabsTrigger>
                </TabsList>
                <TabsContent value="frontend">
                    <FrontendSkills />
                </TabsContent>
                <TabsContent value="backend">
                    <BackendSkills />
                </TabsContent>
                <TabsContent value="tools">
                    <Tools />
                </TabsContent>
            </Tabs>
        </>
    )
}
