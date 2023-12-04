import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";


interface iAppProps {
    title: string;
    overview: string;
    youtubeUrl: string;
    state: boolean;
    changeState: any;
    release: number;
    age: number;
    duration: number;
}

export default function PlayVideoModal({
    changeState,
    overview,
    youtubeUrl,
    state,
    title,
    release,
    age,
    duration
}: iAppProps) {
    return (
        <Dialog open={state} onOpenChange={() => changeState(!state)}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription className="line-clamp-3">
                        {overview}
                    </DialogDescription>
                    <div className="flex gap-x-2 items-center">
                        <p className="font-normal text-sm">{release}</p>
                        <p className="font-normal border py-0.5 px-1 border-gray-200 rounded text-sm">{age}+</p>
                        <p className="font-normal text-sm">{duration}h</p>
                    </div>
                </DialogHeader>
                <iframe src={youtubeUrl}height="250" width="100%"></iframe>
            </DialogContent>
        </Dialog>
    )
}