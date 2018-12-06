import firebaseManager from './firebaseManager'

const createMessage = values => {

  ReactGA.event({
    category: 'Post',
    action: 'Create post',
  })


  return firebaseManager.sharedInstance.firestore()
    .collection('messages')
    .add(firebaseManager.sharedInstance.prepareDocForCreate(values))
    .then( () => values)
    .catch( error => {
      alert(`Whoops, couldn't create the post: ${error.message}`)
    })
}

export default createMessage
