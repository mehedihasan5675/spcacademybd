// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import { easeQuadInOut } from "d3-ease";
// const PogressBar = () => {
//   const percentage = 66;
//   return (
//     <>
//       <AnimatedProgressProvider
//         valueStart={0}
//         valueEnd={66}
//         duration={1.4}
//         easingFunction={easeQuadInOut}
//       >
//         {(value) => {
//           const roundedValue = Math.round(value);
//           return (
//             <CircularProgressbar
//               value={value}
//               text={`${roundedValue}%`}
//               /* This is important to include, because if you're fully managing the
//         animation yourself, you'll want to disable the CSS animation. */
//               styles={buildStyles({ pathTransition: "none" })}
//             />
//           );
//         }}
//       </AnimatedProgressProvider>
//       ;
//     </>
//   );
// };

// export default PogressBar;
