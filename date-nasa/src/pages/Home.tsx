import { Button } from "@/components/ui/button";
import { Globe } from "@/components/magicui/globe";
import { Meteors } from "@/components/magicui/meteors"
import { useState } from "react"
import Info from "./Info";
import "@/styles/home.css";

interface FormDataHome {
    dateBirth: string;
}

export default function Home() {

    const [formData, setFormData] = useState<FormDataHome>({ dateBirth: '' });
    const [selectedDate, setSelectedDate] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if (formData.dateBirth) {
            setSelectedDate(formData.dateBirth);
        }
    };

    return (
        <>
            <div className="relative flex size-full max-w-xl items-center justify-center overflow-hidden rounded-lg border bg-background px-60 pb-60 pt-8 md:pb-70">

                <Meteors number={40} />
                <div className="form-group">
                    <label htmlFor="dateBirth" className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">Date of Birth:</label>
                    <input
                        type="date"
                        id="dateBirth"
                        name="dateBirth"
                        value={formData.dateBirth}
                        onChange={handleChange}
                        min={'1995-05-16'}
                        max={new Date().toISOString().split('T')[0]}
                        required
                        className="text-1xl font-semibold"
                    />

                    <Button onClick={handleSubmit} className="cursor-pointer rounded-full border">Send</Button>
                </div>
                <Globe className="top-40" />
            </div>

            <div className="mt-3">
            {selectedDate && <Info date={selectedDate} />}
            </div>

        </>

    )
}