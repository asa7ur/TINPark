import { useDashboardContext } from '../pages/DashboardLayout'

const Greeting = () => {
  const { user } = useDashboardContext()

  // Get current time
  const currentHour = new Date().getHours()

  // Determine greeting based on the time of day
  let greeting
  if (currentHour >= 6 && currentHour < 12) {
    greeting = 'Buenos días'
  } else if (currentHour >= 12 && currentHour < 21) {
    greeting = 'Buenas tardes'
  } else {
    greeting = 'Buenas noches'
  }

  // Determine whether to use h3 or h4 based on user.name length
  const HeadingTag = user.name.length > 10 ? 'h4' : 'h3'

  return (
    <HeadingTag>
      {greeting}, {user.name}!
    </HeadingTag>
  )
}

export default Greeting
