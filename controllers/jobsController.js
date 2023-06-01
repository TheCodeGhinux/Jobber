const createJob = async () => {
  res.send(' Job controller create')
}

const deleteJob = async () => {
  res.send(' Job controller delete')
}

const getAllJobs = async () => {
  res.send(' Job controller get all')
}

const updateJobs = async () => {
  res.send(' Job controller update user')
}

const showStats = async () => {
  res.send(' Job controller show stats')
}

export { createJob, deleteJob, getAllJobs, updateJobs, showStats }