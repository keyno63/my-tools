CREATE TABLE IF NOT EXISTS m_user_account (
    id varchar NOT NULL Primary Key,
    name varchar NOT NULL,
    hased_password varchar NOT NULL,
    is_deleted boolean NOT NULL
);
