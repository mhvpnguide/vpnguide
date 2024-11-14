import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoAlarmOutline } from "react-icons/io5";
import Cookies from "js-cookie"; // Import js-cookie



export default function Popup({ date, time }: { date: string, time: string }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({ hours: 0, minutes: 0, seconds: 0 });


  useEffect(() => {
    const calculateEndDate = () => {
      const [day, month, year] = date.split('-').map(Number);
      const [hours, minutes] = time.split(':').map(Number);
      return new Date(year, month - 1, day, hours, minutes); // month is 0-based
    };

    const endDate = calculateEndDate();

    const interval = setInterval(() => {
      const now = new Date();
      const totalSeconds = Math.floor((endDate.getTime() - now.getTime()) / 1000);

      if (totalSeconds < 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [date, time]);

  useEffect(() => {
    const isMobileView = () => window.innerWidth <= 768; // Adjust the breakpoint as needed

    const observeCompareElement = () => {
      const compareElement = document.getElementById("compare");
      if (!compareElement) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !Cookies.get("popupShown")) {
            onOpen();
            Cookies.set("popupShown", "true", { expires: 1 / 144 }); // Set the cookie to expire in 10 minutes

            // Stop observing once the popup is shown
            observer.disconnect();
          }
        });
      });

      observer.observe(compareElement);

      // Cleanup the observer on component unmount
      return () => observer.disconnect();
    };

    const timer = setTimeout(() => {
      if (isMobileView() && !Cookies.get("popupShown")) {
        onOpen();
        Cookies.set("popupShown", "true", { expires: 1 / 144 }); // Set the cookie to expire in 10 minutes
      }
    }, 20000); // 2000 milliseconds = 2 seconds

    observeCompareElement();

    return () => clearTimeout(timer);
  }, [onOpen]);


  return (
    <>
      {/* <Button onPress={onOpen}>Open Modal</Button> */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true} size={'5xl'} backdrop={"blur"}>
        <ModalContent className="customModal">
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center justify-center gap-2 bg-red-700 text-center text-white"><IoAlarmOutline className="inline text-[35px]" />Hurry, Limited Time Offer</ModalHeader>

              <ModalBody>
                <div className="flex flex-col pb-5">
                  <div className="text-center text-sm text-orange-700 tablet:text-xl">Deals End in: <span className="font-bold">{timeLeft.hours}</span> Hours <span className="font-bold">{timeLeft.minutes}</span> Minutes <span className="font-bold">{timeLeft.seconds}</span> Seconds</div>
                  <div className="flex w-full">
                    <div className="hidden w-1/2 laptop:block">
                      <div className="relative h-[85%] w-[80%]">
                        <Image src="/Assests/test-vpn/vpn/ExpressVpnPopup.jpg" fill alt="vpn image" />
                      </div>
                    </div>
                    <div className="flex w-full flex-col gap-5 tablet:px-[45px] laptop:w-1/2">
                      <div className="hidden tablet:block">
                        <span className="block font-bold leading-[20px] laptop:text-[60px] laptop:leading-[85px] laptopl:text-[70px]">Get</span>
                        <span className="block font-bold leading-[20px] laptop:text-[60px] laptop:leading-[85px] laptopl:text-[70px]">3 Months</span>
                        <span className="block font-bold leading-[20px] laptop:text-[60px] laptop:leading-[85px] laptopl:text-[70px]">FREE Today!</span>
                      </div>
                      <div className="block pt-2 text-center font-bold leading-[20px] tablet:hidden laptop:text-[60px] laptop:leading-[85px] laptopl:text-[70px]">Get 3 Months FREE Today!</div>
                      <div className="text-[20px] font-semibold text-gray-500">
                        Get 3 months of our most popular VPN for free.
                      </div>
                      <div>
                        <Link href="https://www.google.com" className="rounded-md bg-orange-600 px-4 py-2 text-2xl font-bold text-white hover:bg-orange-700" target="_blank">Get Discount</Link>
                      </div>
                      <div className="text-[20px] font-semibold text-gray-500">
                        Black Friday Special: Get 6 extra months of our #1 VPN for free..
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
