import { Field, ObjectType } from 'type-graphql'

export type GuildBanType = 'id' | 'ip'
export type GuildBanData = string

@ObjectType()
export class GuildBan {
  @Field() type: string

  @Field() data: string
}