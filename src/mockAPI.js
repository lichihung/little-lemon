const availableTimesByDate = {
    '2025-03-01': ['10:00', '11:00', '12:00'],
    '2025-03-02': ['14:00', '15:00', '16:00'],
    '2025-03-03': ['10:00', '11:00', '12:00'],
    '2025-03-04': ['14:00', '15:00', '16:00'],
    '2025-03-05': ['10:00', '11:00', '12:00'],
    '2025-03-06': ['14:00', '15:00', '16:00'],
    '2025-03-07': ['10:00', '11:00', '12:00'],
    '2025-03-08': ['14:00', '15:00', '16:00'],
    '2025-03-09': ['10:00', '11:00', '12:00'],
    '2025-03-10': ['14:00', '15:00', '16:00'],
    '2025-03-11': ['10:00', '11:00', '12:00'],
    '2025-03-12': ['14:00', '15:00', '16:00'],
    '2025-03-13': ['10:00', '11:00', '12:00'],
    '2025-03-14': ['14:00', '15:00', '16:00'],
    '2025-03-15': ['10:00', '11:00', '12:00'],
    '2025-03-16': ['14:00', '15:00', '16:00'],
    '2025-03-17': ['10:00', '11:00', '12:00'],
    '2025-03-18': ['14:00', '15:00', '16:00'],
    '2025-03-19': ['10:00', '11:00', '12:00'],
    '2025-03-20': ['14:00', '15:00', '16:00'],
    '2025-03-21': ['10:00', '11:00', '12:00'],
    '2025-03-22': ['14:00', '15:00', '16:00'],
    '2025-03-23': ['10:00', '11:00', '12:00'],
    '2025-03-24': ['14:00', '15:00', '16:00'],
    '2025-03-25': ['10:00', '11:00', '12:00'],
    '2025-03-26': ['14:00', '15:00', '16:00'],
    '2025-03-27': ['10:00', '11:00', '12:00'],
    '2025-03-28': ['14:00', '15:00', '16:00'],
    '2025-03-29': ['10:00', '11:00', '12:00'],
    '2025-03-30': ['14:00', '15:00', '16:00'],
    '2025-03-31': ['14:00', '15:00', '16:00'],
    '2025-04-01': ['10:00', '11:00', '12:00'],
    '2025-04-02': ['14:00', '15:00', '16:00'],
    '2025-04-03': ['10:00', '11:00', '12:00'],
    '2025-04-04': ['14:00', '15:00', '16:00'],
    '2025-04-05': ['10:00', '11:00', '12:00'],
    '2025-04-06': ['14:00', '15:00', '16:00'],
    '2025-04-07': ['10:00', '11:00', '12:00'],
    '2025-04-08': ['14:00', '15:00', '16:00'],
    '2025-04-09': ['10:00', '11:00', '12:00'],
    '2025-04-10': ['14:00', '15:00', '16:00'],
    '2025-04-11': ['10:00', '11:00', '12:00'],
    '2025-04-12': ['14:00', '15:00', '16:00'],
    '2025-04-13': ['10:00', '11:00', '12:00'],
    '2025-04-14': ['14:00', '15:00', '16:00'],
    '2025-04-15': ['10:00', '11:00', '12:00'],
    '2025-04-16': ['14:00', '15:00', '16:00'],
    '2025-04-17': ['10:00', '11:00', '12:00'],
    '2025-04-18': ['14:00', '15:00', '16:00'],
    '2025-04-19': ['10:00', '11:00', '12:00'],
    '2025-04-20': ['14:00', '15:00', '16:00'],
    '2025-04-21': ['10:00', '11:00', '12:00'],
    '2025-04-22': ['14:00', '15:00', '16:00'],
    '2025-04-23': ['10:00', '11:00', '12:00'],
    '2025-04-24': ['14:00', '15:00', '16:00'],
    '2025-04-25': ['10:00', '11:00', '12:00'],
    '2025-04-26': ['14:00', '15:00', '16:00'],
    '2025-04-27': ['10:00', '11:00', '12:00'],
    '2025-04-28': ['14:00', '15:00', '16:00'],
    '2025-04-29': ['10:00', '11:00', '12:00'],
    '2025-04-30': ['14:00', '15:00', '16:00'],
  };


  const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(availableTimesByDate[date]){
                resolve(availableTimesByDate[date])
            }
            else{
                reject(new Error('No available times for the selected date.'));
            }
        } , 1000)
    })
  }

  const submitAPI = (formData) => {
    availableTimesByDate[formData.resdate] = availableTimesByDate[formData.resdate].filter(time => time !== formData.restime);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true); // Simulate successful submission
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 1000); // Simulate API delay
    });
  };

  export{fetchAPI,submitAPI}