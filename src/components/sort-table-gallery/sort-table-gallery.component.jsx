// import { useEffect, useState } from "react";

// import { 
//   DropdownButton, 
//   DropdownContainer, 
//   DropdownItem, 
//   DropdownList, 
//   DropdownWrapper, 
//   SortButton 
// } from "./sort.table-gallery.styles";

// const SortTableGallery = ({ order, limit, type, breedsName, onOrderChange, onLimitChange, onTypeChange, onBreedChange, children }) => {
//   return ( 
//     <>
//       {breedsName && breedsName.length > 0 && (
//         <DropdownContainer>
//           <div>
// 						<label htmlFor="order">Order:</label>
// 						<select id="order" value={order} onChange={(e) => onOrderChange(e.target.value)}>
// 							<option value="asc">Ascending</option>
// 							<option value="desc">Descending</option>
// 							<option value="random">Random</option>
// 						</select>
// 					</div>
// 					<div>
// 						<label htmlFor="limit">Limit:</label>
// 						<select id="limit" value={limit} onChange={(e) => onLimitChange(e.target.value)}>
// 							<option value="all">All items</option>
// 							<option value="5">5 items per page</option>
// 							<option value="10">10 items per page</option>
// 							<option value="20">20 items per page</option>
// 						</select>
// 					</div>
// 					<div>
// 						<label htmlFor="type">Type:</label>
// 						<select id="type" value={type} onChange={(e) => onTypeChange(e.target.value)}>
// 							<option value="all">All</option>
// 							<option value="static">Static</option>
// 							<option value="animated">Animated</option>
// 						</select>
// 					</div>
// 					<div>
// 						<label htmlFor="breeds">Breeds:</label>
// 						<select id="breeds" value={breedsName} onChange={(e) => onBreedChange(e.target.value)}>
//           {breedsName.map((breed) => (
//             <option key={breed.id} value={breed.id}>
//               {breed.name}
//             </option>
//           ))}
//         </select>
//       </div>
//         </DropdownContainer>
//       )}
//       {children}
//     </>
//   );
// };

// export default SortTableGallery;
