import { useState } from 'react'

import { Edit, LogOut } from '@/assets'
import { Button, Card, Typography } from '@/components'
import { PersonalInfoForm } from '@/components/profile/personalInfo/PersonalInfoForm'

type Props = {
  avatar: string
  email: string
  name: string
  onAvatarChange: (newAvatar: string) => void
}
export const PersonalInfo = ({ avatar, email, name, onAvatarChange }: Props) => {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false)
  const editAvatarHandler = () => {
    onAvatarChange('')
  }
  const editNameHandler = () => {
    setIsFormVisible(!isFormVisible)
  }

  return (
    <>
      <Card>
        <Typography variant={'large'}>Personal information</Typography>
        <div>
          <img alt={'avatar'} src={avatar} />
          <button onClick={editAvatarHandler}>
            <Edit />
          </button>
        </div>
        {isFormVisible ? (
          <PersonalInfoForm />
        ) : (
          <div>
            <Typography variant={'h2'}>{name}</Typography>
            <button onClick={editNameHandler}>
              <Edit />
            </button>
          </div>
        )}

        <Typography variant={'body2'}>example@mail.com {email}</Typography>
        <Button>
          <LogOut />
          Logout
        </Button>
      </Card>
    </>
  )
}
