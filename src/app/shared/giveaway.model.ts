export class Giveaway {
  constructor(
    public id: number,
    public title: string,
    public worth: string,
    public thumbnail: string,
    public image: string,
    public description: string,
    public instructions: string,
    public open_giveaway_url: string,
    public published_date: string,
    public type: string,
    public platforms: string,
    public end_date: string,
    public users: number,
    public status: string,
    public gamerpower_url: string,
    public open_giveaway: string
  ) {}
}
