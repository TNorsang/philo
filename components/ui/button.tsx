import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid'

interface ButtonProps {
  children: any
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  const { className, type, disabled, func } = children

  return (
    <button
      className={className}
      type={type}
      disabled={disabled}
      onClick={func}
    >
      <ChatBubbleLeftRightIcon className="h-6 w-6" />
    </button>
  )
}

export default Button
