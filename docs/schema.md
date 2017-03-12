# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## notes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
user_id   | integer   | not null, foreign key (references users), indexed
notebook_id | integer   | not null, foreign key (references notebooks), indexed
archived    | boolean   | not null, default: false

## notebooks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
note_id     | integer   | not null, foreign key (references notes), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed
