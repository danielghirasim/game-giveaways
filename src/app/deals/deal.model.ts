export class Deal {
  constructor(
    public id: number,
    public title: string,
    public worth: string,
    public thumbnail: string,
    public image: string,
    public description: string,
    public instructions: string,
    public openGiveawayUrl: string,
    public publishedDate: string,
    public type: string,
    public platforms: string,
    public endDate: string,
    public users: number,
    public status: string,
    public url: string,
    public openGiveaway: string
  ) {}
}
