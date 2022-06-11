export const Bug=(bug)=>{
    this._id = bug._id,
    this.name = bug.name,
    this.version = bug.version,
    this.priority = bug.priority,
    this.creator = bug.creator,
    this.assigned = bug.assigned,
    this.datePosted = bug.datePosted
}