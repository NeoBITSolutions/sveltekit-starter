import { relations, sql } from "drizzle-orm";
import { integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";
import { lower, profiles } from "..";

export const invites = sqliteTable(
  "invites",
  {
    id: text("id")
      .notNull()
      .default(
        sql`(lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab',abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6))))`
      )
      .primaryKey(),
    email: text("email").notNull(),
    createdAt: text("created_at")
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
    active: integer("active", { mode: "boolean" }).notNull().default(false),
  },
  (table) => [uniqueIndex("invites_email_unique_idx").on(lower(table.email))]
);

export type InviteSelect = typeof invites.$inferSelect;
export type InviteInsert = typeof invites.$inferInsert;

export const users = sqliteTable(
  "users",
  {
    id: text("id")
      .notNull()
      .default(
        sql`(lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab',abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6))))`
      )
      .primaryKey(),
    email: text("email").notNull(),
    createdAt: text("created_at")
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => [uniqueIndex("user_email_unique_idx").on(lower(table.email))]
);

export const usersRelations = relations(users, ({ one, many }) => ({
  profile: one(profiles, {
    fields: [users.id],
    references: [profiles.userId],
  }),
  sessions: many(sessions),
  verificationCodes: many(verificationCodes),
  usersRoles: many(usersRoles),
}));

export type UserSelect = typeof users.$inferSelect;
export type UserInsert = typeof users.$inferInsert;

export const sessions = sqliteTable("sessions", {
  id: text("id")
    .notNull()
    .default(
      sql`(lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab',abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6))))`
    )
    .primaryKey(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, {
      onUpdate: "cascade",
      onDelete: "cascade",
    }),
});

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));

export type SessionSelect = typeof sessions.$inferSelect;
export type SessionInsert = typeof sessions.$inferInsert;

export const verificationCodes = sqliteTable("verification_codes", {
  id: text("id")
    .notNull()
    .default(
      sql`(lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab',abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6))))`
    )
    .primaryKey(),
  code: text("code").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, {
      onUpdate: "cascade",
      onDelete: "cascade",
    }),
  expiresAt: text("expires_at").notNull(),
  createdAt: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const verificationCodesRelations = relations(verificationCodes, ({ one }) => ({
  user: one(users, {
    fields: [verificationCodes.userId],
    references: [users.id],
  }),
}));

export type VerificationCodeSelect = typeof verificationCodes.$inferSelect;
export type VerificationCodeInsert = typeof verificationCodes.$inferInsert;

export const roles = sqliteTable("roles", {
  id: text("id")
    .notNull()
    .default(
      sql`(lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab',abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6))))`
    )
    .primaryKey(),
  name: text("name").notNull(),
  createdAt: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const rolesRelations = relations(roles, ({ many }) => ({
  usersRoles: many(usersRoles),
}));

export type RoleSelect = typeof roles.$inferSelect;
export type RoleInsert = typeof roles.$inferInsert;

export const usersRoles = sqliteTable("users_roles", {
  userId: text("user_id")
    .notNull()
    .references(() => users.id, {
      onUpdate: "cascade",
      onDelete: "cascade",
    }),
  roleId: text("role_id")
    .notNull()
    .references(() => roles.id, {
      onUpdate: "cascade",
      onDelete: "cascade",
    }),
  createdAt: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const usersRolesRelations = relations(usersRoles, ({ one }) => ({
  user: one(users, {
    fields: [usersRoles.userId],
    references: [users.id],
  }),
  role: one(roles, {
    fields: [usersRoles.roleId],
    references: [roles.id],
  }),
}));

export type UserRoleSelect = typeof usersRoles.$inferSelect;
export type UserRoleInsert = typeof usersRoles.$inferInsert;
