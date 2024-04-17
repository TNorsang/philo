import { BeakerIcon } from '@heroicons/react/24/solid';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

export default function Button({children}){
    return(
        <button> <ChatBubbleLeftRightIcon className="h-6 w-6" /> {children}</button>
    )
}