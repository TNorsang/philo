import { BeakerIcon } from '@heroicons/react/24/solid'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid'

export default function Button({ children }) {
  const { className, type, variant, disabled } = children
  return (
    <button
      className={className}
      type={type}
      disabled={disabled}
      onClick={children.func}
    >
      <ChatBubbleLeftRightIcon className="h-6 w-6" />
    </button>
  )
}
