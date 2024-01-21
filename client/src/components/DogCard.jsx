const dogGender = {
  MALE: "macho",
  FEMALE: "hembra",
};

export default function DogCard({ dog }) {
  return (
    <div
      key={dog.id}
      className="w-[300px] h-[400] rounded-lg bg-secondary overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition duration-300 ease-in-out"
    >
      <div className="w-full h-[80%]">
        {!!dog.photos.length > 0 && (
          <img
            className="w-full h-full object-cover object-center"
            src={dog.photos[0].url}
            alt={dog.name}
          />
        )}
      </div>
      <div className="w-full font-semibold h-[20%] p-2 flex flex-col justify-center items-center gap-1">
        <h1 className="text-2xl">{dog.name}</h1>
        <div className="flex gap-2">
          {dog.ageYears > 0 && (
            <p className="w-fit text-primary rounded-xl px-2 bg-purple-300">
              {`${dog.ageYears} ${dog.ageYears === 1 ? "año" : "años"}`}
            </p>
          )}
          <p className="w-fit text-red-700 rounded-xl px-2 bg-red-300">
            {dogGender[dog.gender]}
          </p>
        </div>
      </div>
    </div>
  );
}
