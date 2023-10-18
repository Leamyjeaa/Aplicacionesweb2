-- CreateTable
CREATE TABLE "TVShow" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "Director" TEXT NOT NULL,
    "investment" INTEGER NOT NULL,

    CONSTRAINT "TVShow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Iseason" (
    "id" SERIAL NOT NULL,
    "Descripcion" TEXT NOT NULL,
    "episodeNumber" INTEGER NOT NULL,

    CONSTRAINT "Iseason_pkey" PRIMARY KEY ("id")
);
