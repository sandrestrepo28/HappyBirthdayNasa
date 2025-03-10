import "@/styles/info.css";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lens } from "@/components/magicui/lens"
import { useNasaData } from "@/hooks/useNasaData";

interface InfoProps {
    date: string;
}

export default function Info({ date }: InfoProps) {

    const { data, isLoading, isError, error } = useNasaData(date);

    if (isLoading) return <div>Loading...</div>;
    if (isError) {
        console.error(error);
        return <div>Error loading data.</div>;
    }
    return (
        <div className=" flex items-center justify-center">
            <Card className="relative max-w-xl shadow-none">
                <CardHeader>
                    <Lens zoomFactor={2} lensSize={150} isStatic={false} ariaLabel="Zoom Area">
                        <img
                            src={data.url}
                            alt="NASA APOD"
                            width={500}
                            height={500}
                        />
                    </Lens>
                </CardHeader>
                <CardContent>
                    <CardTitle className="text-2xl">{data.title}</CardTitle>
                    <CardDescription>
                        {data.explanation}
                    </CardDescription>
                </CardContent>
            </Card>
        </div>
    );
}