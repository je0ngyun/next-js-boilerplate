import useToast from '@hooks/useToast'
import usePopup from '@hooks/usePopup'
import ThemeSwitch from '@components/ThemeSwitch'

export default function Home() {
  const { fireToast } = useToast()
  const { openPopup } = usePopup()

  const handleToastFire = () => {
    fireToast('토스트 입니다.', 1500)
  }

  const handleOpenPopup = async () => {
    await openPopup({ render: <div>팝업내용 컴포넌트</div> })
  }

  return (
    <div>
      <ThemeSwitch />
      <button onClick={handleToastFire}>Fire Toast</button>
      <button onClick={handleOpenPopup}>Open Popup</button>
    </div>
  )
}
