-- CreateTable
CREATE TABLE "enthusiast_community" (
    "id" TEXT NOT NULL,
    "id_enthusiast" TEXT NOT NULL,
    "id_community" TEXT NOT NULL,

    CONSTRAINT "enthusiast_community_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "enthusiast_community" ADD CONSTRAINT "enthusiast_community_id_enthusiast_fkey" FOREIGN KEY ("id_enthusiast") REFERENCES "enthusiast"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "enthusiast_community" ADD CONSTRAINT "enthusiast_community_id_community_fkey" FOREIGN KEY ("id_community") REFERENCES "community"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
