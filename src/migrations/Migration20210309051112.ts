import { Migration } from '@mikro-orm/migrations';

export class Migration20210309051112 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "post" ("id" serial primary key, "title" varchar(255) not null, "created_at" jsonb not null, "updated_at" jsonb not null);');
  }

}
