-- AlterTable
ALTER TABLE "User" ADD COLUMN     "emailVerified" TIMESTAMP(3),
ADD COLUMN     "image" TEXT NOT NULL DEFAULT E'';

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "user" TEXT,
    "type" TEXT NOT NULL DEFAULT E'',
    "provider" TEXT NOT NULL DEFAULT E'',
    "providerAccountId" TEXT NOT NULL DEFAULT E'',
    "refresh_token" TEXT NOT NULL DEFAULT E'',
    "access_token" TEXT NOT NULL DEFAULT E'',
    "expires_at" INTEGER,
    "token_type" TEXT NOT NULL DEFAULT E'',
    "scope" TEXT NOT NULL DEFAULT E'',
    "id_token" TEXT NOT NULL DEFAULT E'',
    "session_state" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "user" TEXT,
    "sessionToken" TEXT NOT NULL DEFAULT E'',
    "expires" TIMESTAMP(3),

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "id" TEXT NOT NULL,
    "identifier" TEXT NOT NULL DEFAULT E'',
    "token" TEXT NOT NULL DEFAULT E'',
    "expires" TIMESTAMP(3),

    CONSTRAINT "VerificationToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_providerAccountId_key" ON "Account"("providerAccountId");

-- CreateIndex
CREATE INDEX "Account_user_idx" ON "Account"("user");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE INDEX "Session_user_idx" ON "Session"("user");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
