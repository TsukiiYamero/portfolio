

interface Props {
    type: 'SuperTitle' | 'SubSuperTitle' | 'Title' | 'SubTitle' | 'Text';
    children: React.ReactNode;
    className?: string;
}

export const Text = ({ children, className = '', type }: Props) => {
    switch (type) {
        case 'SuperTitle':
            return <h1 className={`${className} font-black text-white lg:text-[70px] xl:text-[80px] sm:text-[46px] xs:text-[38px] text-[30px] lg:leading-[98px] mt-2`}>
                {children}
            </h1>
        case 'SubSuperTitle':
            return <p className={`${className} text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]`}>
                {children}
            </p>
        case 'Title':
            return <h2 className={`${className} text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>
                {children}
            </h2>
        case 'SubTitle':
            return <p className={`${className} sm:text-[1rem] text-[14px] text-secondary uppercase tracking-wider lg:text-[1.25rem]`}>
                {children}
            </p>
        case 'Text':
            return <p className={`${className} text-secondary text-[1rem] leading-[30px] lg:p-3 lg:text-[1.25rem]`}>
                {children}</p>
    }
}
