import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '../components/GoalForm'
import GoalItem from '../components/GoalItem'
import Spinner from '../components/Spinner'
import { getGoals, reset } from '../features/goals/goalSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getGoals())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome</h1>
        <h1>{user && user.name}</h1>
        <p>Student Information</p>
         <div className="form-group">
        <span><label htmlFor="">Last Name:</label><input type="text" value={user && user.lname} /></span>
        <span><label htmlFor="">Age:</label><input type="text" value={user && user.age} /></span>
        <span><label htmlFor="">Contact:</label><input type="text" value={user && user.cp} /></span>
        <span><label htmlFor="">Address:</label><input type="text" value={user && user.address} /></span>
        </div>
        
       
      </section>

      <GoalForm />

      <section className='content'>
        {goals.length > 0 ? (
          <div className='goals'>
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You are not enrolled to any subject</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard
