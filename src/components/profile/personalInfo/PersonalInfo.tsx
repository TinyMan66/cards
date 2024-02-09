import { useState } from 'react'

import { Edit, LogOut } from '@/assets'
import { Button, Card, Typography } from '@/components'
import { PersonalInfoForm } from '@/components/profile/personalInfo/PersonalInfoForm'

import s from './PersonalInfo.module.scss'

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
      <Card className={s.card}>
        <Typography className={s.title} variant={'large'}>
          Personal information
        </Typography>
        <div className={s.imgContainer}>
          <div className={s.imgWrapper}>
            <img alt={'avatar'} src={avatar} />
            <button className={s.editAvatarButton} onClick={editAvatarHandler}>
              <Edit />
            </button>
          </div>
        </div>
        {isFormVisible ? (
          <PersonalInfoForm />
        ) : (
          <div className={s.nameContainer}>
            <Typography variant={'h2'}>{name}</Typography>
            <button className={s.editNameButton} onClick={editNameHandler}>
              <Edit />
            </button>
          </div>
        )}

        <Typography className={s.email} variant={'body2'}>
          {email}
        </Typography>
        <Button className={s.logoutButton} variant={'secondary'}>
          <LogOut />
          Logout
        </Button>
      </Card>
    </>
  )
}
