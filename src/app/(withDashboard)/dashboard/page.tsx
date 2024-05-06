import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Logged-in user email {session?.user?.email}
          </h1>
          <Image
            className="mx-auto rounded-full mt-5"
            src={
              session?.user?.image ||
              "https://images.pexels.com/photos/19959664/pexels-photo-19959664/free-photo-of-portrait-of-cat-in-front-of-curtain-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="user image"
            width={100}
            height={100}
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
