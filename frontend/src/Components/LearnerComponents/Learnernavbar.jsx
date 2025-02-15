import { useRef, useState, useEffect } from "react";
import Button from "../LandingPage_components/Button";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import { Link, useLocation } from "react-router-dom";
import { Avatar } from "../ui/avatar";
import { LogOut, User, Settings, Library } from "lucide-react";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaCrown } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const navItems = ["Home", "Contact"];
const Learnernavbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");
//   const underlineRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const NavContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();

  // GSAP animations setup
  useEffect(() => {
    // Underline animation
    gsap.set(underlineRef.current, { scaleX: 0, opacity: 0 });
  }, []);

  const animateNavClick = (target, itemName) => {
    const rect = target.getBoundingClientRect();
    setActiveTab(itemName);

    // Click animation
    gsap.fromTo(
      target,
      { scale: 0.95 },
      {
        scale: 1,
        duration: 0.3,
        ease: "elastic.out(1, 0.5)",
        onStart: () => {
          // Ripple effect
          const ripple = document.createElement("div");
          ripple.style.cssText = `
               position: absolute;
               width: 40px;
               height: 40px;
               background: rgba(255, 255, 255, 0.3);
               border-radius: 50%;
               pointer-events: none;
               left: ${rect.left + rect.width / 2 - 20}px;
               top: ${rect.top + rect.height / 2 - 20}px;
             `;
          document.body.appendChild(ripple);

          gsap.to(ripple, {
            scale: 2,
            opacity: 0,
            duration: 0.6,
            onComplete: () => ripple.remove(),
          });
        },
      }
    );

    // Underline animation
//     gsap.to(underlineRef.current, {
//       scaleX: 1,
//       opacity: 1,
//       left: rect.left,
//       width: rect.width,
//       duration: 0.3,
//       ease: "power2.out",
//     });
//   };

  const handleNavClick = (e, item) => {
    animateNavClick(e.currentTarget, item);
  };

  // Scroll animations (existing code)
  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      NavContainerRef.current.classList.remove("floating-nav-sec");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      NavContainerRef.current.classList.add("floating-nav-sec");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      NavContainerRef.current.classList.add("floating-nav-sec");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(NavContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.1,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={NavContainerRef}
      className="fixed z-[100] top-0 w-full h-20 transition-all duration-700"
    >
      <div
        ref={underlineRef}
        className="absolute bottom-0 h-[2px] bg-blue-500 origin-left"
      />
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex items-center size-full justify-between p-4 rounded-lg">
          <div className="flex items-center gap-7">
            <video
              src="/videos/Logo.mp4"
              type="video/mp4"
              autoPlay
              loop
              muted
              className="max-w-40"
            />
          </div>
          <div className="flex h-full items-center">
            <Link to={"/Learnerpricing"}>
              <Button
                id="Course-button"
                title="Pricing"
                rightIcon={<FaCrown style={{ color: "#FFD43B" }} />}
                containerClass="bg-blue-50 text-black md:flex hidden items-center justify-center gap-1 hover:scale-105 transition-transform"
              />
            </Link>
            <div className="hidden md:flex items-center h-full relative">
              {navItems.map((item) => (
                <div
                  key={item}
                  className="relative px-4 h-full flex items-center"
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      y: -2,
                      duration: 0.2,
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      y: 0,
                      duration: 0.2,
                    });
                  }}
                >
                  {item === "Home" ? (
                    <Link
                      to="/learner"
                      className={`nav-hover-btn_learner relative ${
                        activeTab === item || location.pathname === "/learner"
                          ? "text-blue-500 font-semibold"
                          : ""
                      }`}
                      onClick={(e) => handleNavClick(e, item)}
                    >
                      {item}
                    </Link>
                  ) : (
                    <a
                      href={`#${item.toLowerCase()}`}
                      className={`nav-hover-btn_learner relative ${
                        activeTab === item ? "text-blue-500 font-semibold" : ""
                      }`}
                      onClick={(e) => handleNavClick(e, item)}
                    >
                      {item}
                    </a>
                  )}
                </div>
              ))}
            </div>
            <div className="mx-5">
              <DropdownMenu className="z-[150]">
                <DropdownMenuTrigger asChild>
                  <Avatar className="md:flex hidden items-center justify-center gap-1">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="avatar"
                    />
                    <AvatarFallback>OP</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        John Doe
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        john.doe@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <Link to="/learner/profile">
                        <span> Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Library className="mr-2 h-4 w-4" />
                      <span>My Courses</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Learnernavbar;
