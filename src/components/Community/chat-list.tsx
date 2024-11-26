import { Check } from 'lucide-react'

interface ChatUser {
  id: number
  name: string
  message: string
  time: string
  avatar: string
  isOnline?: boolean
}

const users: ChatUser[] = [
  {
    id: 1,
    name: "Michael John",
    message: "Hi, what how are you doing?",
    time: "10:57",
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: true
  },
  {
    id: 2,
    name: "Elizabeth Sarah",
    message: "Thank you for your order!",
    time: "8:20",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    id: 3,
    name: "Jenny Wilson",
    message: "Hello, Jenny",
    time: "7:00",
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: true
  },
  {
    id: 4,
    name: "Community",
    message: "Typing...",
    time: "8:20",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    id: 5,
    name: "Esther Howard",
    message: "Hello, Esther",
    time: "10:57",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    id: 6,
    name: "Cody Fisher",
    message: "Thank you for your order!",
    time: "7:00",
    avatar: "/placeholder.svg?height=40&width=40"
  }
]

export function ChatList() {
  return (
    <div className="flex flex-col">
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer"
        >
          <div className="relative">
            <img
              alt={user.name}
              className="h-10 w-10 rounded-full"
              src={user.avatar}
            />
            {user.isOnline && (
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-muted-foreground">{user.time}</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-sm text-muted-foreground truncate">
                {user.message}
              </p>
              {user.id !== 4 && <Check className="h-4 w-4 text-blue-500" />}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

