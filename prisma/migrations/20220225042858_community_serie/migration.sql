-- CreateTable
CREATE TABLE "CommunitySerie" (
    "id" TEXT NOT NULL,
    "id_community" TEXT NOT NULL,
    "id_serie" TEXT NOT NULL,

    CONSTRAINT "CommunitySerie_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CommunitySerie" ADD CONSTRAINT "CommunitySerie_id_serie_fkey" FOREIGN KEY ("id_serie") REFERENCES "serie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunitySerie" ADD CONSTRAINT "CommunitySerie_id_community_fkey" FOREIGN KEY ("id_community") REFERENCES "community"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
