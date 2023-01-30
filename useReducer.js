const [event, updateEvent] = useReducer((state, action) => {
    const newEvent = {...state}

    switch (action.type) {
      case 'setTitle':
        newEvent.title = action.title;
        break;
      // More actions...
    }
    return newEvent
  }, { title: '', description: '', attendees: [] })
  
  
  //-------------------
  
  return <>
    <input value={event.title} 
      onChange={e => updateEvent({ type: 'setTitle', title: 'Hello' }) } />
    {/* ... */}
  </>
  
