-- CreateTable
CREATE TABLE "Transcription" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'',
    "slug" TEXT NOT NULL DEFAULT E'',
    "transcriptionId" TEXT NOT NULL DEFAULT E'',
    "content" JSONB,
    "user" TEXT,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Transcription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmailList" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL DEFAULT E'',
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "EmailList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceToken" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION DEFAULT 0,
    "usageDescription" TEXT NOT NULL DEFAULT E'',
    "user" TEXT,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "ServiceToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Transcription_user_idx" ON "Transcription"("user");

-- CreateIndex
CREATE UNIQUE INDEX "EmailList_email_key" ON "EmailList"("email");

-- CreateIndex
CREATE INDEX "ServiceToken_user_idx" ON "ServiceToken"("user");

-- AddForeignKey
ALTER TABLE "Transcription" ADD CONSTRAINT "Transcription_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceToken" ADD CONSTRAINT "ServiceToken_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
